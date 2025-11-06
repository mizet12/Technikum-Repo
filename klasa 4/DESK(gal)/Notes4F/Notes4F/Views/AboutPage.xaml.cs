namespace Notes4F.Views;

public partial class aboutPage : ContentPage
{
	public aboutPage()
	{
		InitializeComponent();
	}
	private async void LearnMore_Clicked(object sender, EventArgs e) 
	{
		if(BindingContext is Models.About about)
			await Launcher.Default.OpenAsync(about.MoreInfoUrl);
	}
}