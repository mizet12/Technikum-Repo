namespace Notes4F.Views;


[QueryProperty(nameof(ItemId), nameof(ItemId))]

public partial class NotePage : ContentPage
{
    string _fileName = Path.Combine(FileSystem.AppDataDirectory, "notes.txt");
    public string ItemId
    {
        set { LoadNote(value); }
    }
	public NotePage()
	{
		InitializeComponent();
        string appDataPath = FileSystem.AppDataDirectory;
        string randomFileName = $"{Path.GetRandomFileName()}.notes.txt";
        LoadNote(Path.Combine(appDataPath, randomFileName));
    }
    private void LoadNote(string FileName)
    {
        Models.Note noteModel = new Models.Note();
        noteModel.FileName = FileName;

        if(File.Exists(FileName))
        {
            noteModel.Text = File.ReadAllText(FileName);
            noteModel.Date = File.GetCreationTime(FileName);
        }
        BindingContext = noteModel;
    }

    private async void SaveButton_Clicked(object sender, EventArgs e)
    {
        if(BindingContext is Models.Note note)
        {
            File.WriteAllText(note.FileName, TextEditor.Text);
            await Shell.Current.GoToAsync("..");
        }
    }
    private async void DeleteButton_Clicked(object sender, EventArgs e)
    {
        if(BindingContext is Models.Note note)
        {
            if (File.Exists(note.FileName))
            {
                File.Delete(note.FileName);
            }
        }
        await Shell.Current.GoToAsync("..");
    }
}