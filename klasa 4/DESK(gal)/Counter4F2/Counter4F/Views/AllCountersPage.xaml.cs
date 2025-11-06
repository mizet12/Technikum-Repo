using Counter4F.Models;
using Newtonsoft.Json;
using System.Collections.ObjectModel;
using System.IO;

namespace Counter4F.Views;

public partial class AllCountersPage : ContentPage
{
    internal ObservableCollection<Counter> Counters { get; set; }

    public AllCountersPage()
	{
        InitializeComponent();

        string folderPath = Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData);
        string filePath = Path.Combine(folderPath, "counters.json");

        if (File.Exists(filePath))
        {
            try
            {
                string countersJson = File.ReadAllText(filePath);
                Models.AllCounters AllCounters = new Models.AllCounters();
                AllCounters.Counters = JsonConvert.DeserializeObject<ObservableCollection<Counter>>(countersJson);
                BindingContext = AllCounters;
            }
            catch (Exception ex)
            {
                Console.WriteLine("Błąd wczytywania danych: " + ex.Message);
            }
        }
        else
        {
            Models.AllCounters AllCounters = new Models.AllCounters();
            BindingContext = AllCounters;
        }
    }

    private async void MinusButton_Clicked(object sender, EventArgs e)
    {
        var button = (Button)sender;
        var item = (Counter)button.BindingContext;
        item.variable--;

        
            Models.AllCounters AllCounters = (Models.AllCounters)BindingContext;
            string countersJson = JsonConvert.SerializeObject(AllCounters.Counters);

            // Ścieżka do pliku z danymi
            string folderPath = Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData);
            string filePath = Path.Combine(folderPath, "counters.json");

            // Zapisz dane do pliku
            File.WriteAllText(filePath, countersJson);
        
    }

    private async void PlusButton_Clicked(object sender, EventArgs e)
    {
        var button = (Button)sender;
        var item = (Counter)button.BindingContext;
        item.variable++;

            Models.AllCounters AllCounters = (Models.AllCounters)BindingContext;
            string countersJson = JsonConvert.SerializeObject(AllCounters.Counters);

            // Ścieżka do pliku z danymi
            string folderPath = Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData);
            string filePath = Path.Combine(folderPath, "counters.json");

            // Zapisz dane do pliku
            File.WriteAllText(filePath, countersJson);

    }

    private void Add_Clicked(object sender, EventArgs e)
    {
        Models.AllCounters AllCounters = (Models.AllCounters)BindingContext;
        Counter counter = new Counter();
        
        AllCounters.Counters.Add(counter);
    }


    
}