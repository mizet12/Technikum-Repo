using losowanieUczniow.model;

namespace losowanieUczniow.View;

public partial class AllC : ContentPage
{
	public AllC()
	{
		InitializeComponent();
		BindingContext = new klasy();
	}
    protected override void OnAppearing()
    {
        ((allklasy)BindingContext).LoadClass();
    }
    private async void NewClass_Clicked(object sender, EventArgs e)
    {
        if (BindingContext is klasy _class) {
            File.WriteAllText(Path.Combine(FileSystem.AppDataDirectory, $"{_class.klasa}_klasa.txt"), _class.klasa);
            await Shell.Current.GoToAsync($"{nameof(Klasa)}?{nameof(Klasa.ClassName)}={_class.klasa}");
        }
    }

    private async void WyborKlasy(object sender, SelectionChangedEventArgs e)
    {
        if(e.CurrentSelection.Count != 0)
        {
            var _class = (klasy)e.CurrentSelection[0];
            await Shell.Current.GoToAsync($"{nameof(Klasa)}?{nameof(Klasa.ClassName)}={_class.klasa}");
            wszystkieKlasy.SelectedItem = null;
        }
    }
}