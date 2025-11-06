using Lista.Models;
namespace Lista;

public partial class MainPage : ContentPage
{
	public MainPage()
    {
        InitializeComponent();


        AllProducts.Products = FileHelper.LoadProducts();
        productsCollection.ItemsSource = AllProducts.Products;
    }
   
  
   
}