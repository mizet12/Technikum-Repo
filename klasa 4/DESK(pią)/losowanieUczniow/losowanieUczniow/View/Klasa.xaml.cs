using losowanieUczniow.model;
using System.Collections.ObjectModel;

namespace losowanieUczniow.View;

public partial class Klasa : ContentPage
{
    public Klasa()
    {
        InitializeComponent();

        BindingContext = new uczniowie();

        kolekcjaUczniow.ItemsSource = Persons;
    }
    private ObservableCollection<uczniowie> Persons { get; set; } = new ObservableCollection<uczniowie>();

    private string className;
    private int MaxCount;

    public string ClassName
    {
        get
        {
            return className;
        }
        set
        {
            if (value != null)
            {
                className = value;
                LoadClass(value);
            }
        }
    }
    private void LoadClass(string className)
    {
        MaxCount = 1;
        //Shell.Current.DisplayAlert("Alert", MaxCount, "ok");
        string appDataPath = FileSystem.AppDataDirectory;
        string personsFromFile = File.ReadAllText(Path.Combine(appDataPath, $"{className}_class.txt"));
        string[] separatedPersons = personsFromFile.Split("\r\n");
        separatedPersons = separatedPersons.Skip(1).ToArray();

        foreach (string PersonLine in separatedPersons)
        {
            string[] product = PersonLine.Split(';');
            string[] product2 = PersonLine.Split(";");

            uczniowie readyPerson = new uczniowie()
            {
                numer = MaxCount,
                Name = product[0],
                Surname = product2[0],
            };
            MaxCount++;
            Persons.Add(readyPerson);
        };
    }
    public void AddPerson_Clicked(object sender, EventArgs e)
    {
        string fileName = $"{this.ClassName}_class.txt";
        var context = ((uczniowie)BindingContext);
        string addPerson;

        addPerson = $"\r\n{context.Name};true";
        File.AppendAllText(Path.Combine(FileSystem.AppDataDirectory, fileName), addPerson);

        uczniowie newPerson = new uczniowie()
        {
            numer = MaxCount,
            Name = context.Name
        };
        MaxCount++;

        Persons.Add(newPerson);
    }

    public void RandomPerson_CLicked(object sender, EventArgs e)
    {
        string personsFromFile = File.ReadAllText(Path.Combine(FileSystem.AppDataDirectory, $"{className}_class.txt"));
        string[] separatedPersons = personsFromFile.Split("\r\n");
        separatedPersons = separatedPersons.Skip(1).ToArray();

        List<string> EveryPersonName = new List<string>();

        foreach (string PersonLine in separatedPersons)
        {
            string[] product = PersonLine.Split(';');

            EveryPersonName.Add(product[1]);

        };

        Random random = new Random();
        int randomIndex = random.Next(0, EveryPersonName.Count);

        //!!!napisa� if'a do szcz�liwego numerku
        string RandomPerson = EveryPersonName[randomIndex];

        Shell.Current.DisplayAlert("Wylosowano osob�: ", RandomPerson, "ok");

    }

    
    public void DeletePerson_Clicked(object sender, EventArgs e)
    {
        var button = (Button)sender;
        var uczen = (uczniowie)button.BindingContext;

        string appDataPath = FileSystem.AppDataDirectory;
        string personsFromFile = File.ReadAllText(Path.Combine(appDataPath, $"{className}_class.txt"));
        string[] separatedPersons = personsFromFile.Split("\r\n");
        separatedPersons = separatedPersons.Skip(1).ToArray();


        string newWholeClass = $"{this.ClassName}";
        foreach (string PersonLine in separatedPersons)
        {
            string[] things = PersonLine.Split(';');

            if (things[1] != uczen.Name)
            {
                newWholeClass += $"\r\n{things[0]};true";
            }
            else continue;
        }

        File.Delete(Path.Combine(FileSystem.AppDataDirectory + $"{this.ClassName}_class.txt"));
        File.WriteAllText(Path.Combine(FileSystem.AppDataDirectory, $"{this.ClassName}_class.txt"), newWholeClass);
        Persons.Remove(uczen);

    }
}