using Lista.Models;
namespace Lista.Views;

public partial class AddProductView : ContentView
{
	public AddProductView()
	{
		InitializeComponent();
	}
    private void OnAddClicked(object sender, EventArgs e)
    {
        string name = Name.Text;
        string unit = Unit.Text;
       string quantity = Quantity.Text;

        var newProduct = new Product
        {
            Name = name,
            Unit = unit,
            Quantity = double.Parse(quantity)
        };

        AllProducts.Products.Add(newProduct);
        FileHelper.SaveProducts(AllProducts.Products);
    }
}