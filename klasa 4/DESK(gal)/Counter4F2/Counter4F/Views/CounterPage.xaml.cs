namespace Counter4F.Views;

public partial class CounterPage : ContentPage
{
    int counter = 0;
	public CounterPage()
	{
		InitializeComponent();
        Models.Counter counterM = new Models.Counter();
        BindingContext = counterM;
        counterM.variable = counter;
	}
    private void PlusButton_Clicked(object sender, EventArgs e)
    {
        counter++;
        Idc.Text = counter.ToString();
    }

    private void MinusButton_Clicked(object sender, EventArgs e)
    {
        counter--;
        Idc.Text = counter.ToString();
    }
}