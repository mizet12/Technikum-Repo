namespace ShoppingList.Controls;

public partial class SimpleControl : ContentView
{
	public static readonly BindableProperty SongTitleProperty = BindableProperty.Create(nameof(SongTitle), typeof(string), typeof(SimpleControl), string.Empty);
	public static readonly BindableProperty SongAuthorProperty = BindableProperty.Create(nameof(SongAuthor), typeof(string), typeof(SimpleControl), string.Empty);
	public string SongAuthor
	{
		get => (string)GetValue(SongAuthorProperty);
		set => SetValue(SongAuthorProperty, value);
	}
	public string SongTitle
	{
		get => (string)GetValue(SongTitleProperty);
		set => SetValue(SongTitleProperty, value);
	}
	public SimpleControl()
	{
		InitializeComponent();
	}
}