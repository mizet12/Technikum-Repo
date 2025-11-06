
using Lista.Models;
using Microsoft.Maui.Controls;

namespace Lista.Views
{
    public partial class ProductView : ContentView
    {
        public ProductView()
        {
            InitializeComponent();
        }

        private void CheckedChanged(object sender, CheckedChangedEventArgs e)
        {
            if (sender is CheckBox checkBox && BindingContext is Product product)
            {
                MoveProductToEndIfChecked(checkBox, product);
                if (product.IsPurchased == 1)
                {
                    name.TextDecorations = TextDecorations.Strikethrough;
                    quantity.TextDecorations = TextDecorations.Strikethrough;
                    unit.TextDecorations = TextDecorations.Strikethrough;
                    Sproduct.BackgroundColor = Color.FromRgb(65, 65, 65);
                }
                else
                {
                    name.TextDecorations = TextDecorations.None;
                    quantity.TextDecorations = TextDecorations.None;
                    unit.TextDecorations = TextDecorations.None;
                    Sproduct.BackgroundColor = Color.FromRgb(125,125,125);
                }
            }

            FileHelper.SaveProducts(AllProducts.Products);
        }


        private void MoveProductToEndIfChecked(CheckBox checkBox, Product product)
        {
            int selectedIndex = AllProducts.Products.IndexOf(product);

            if (checkBox.IsChecked)
            {
                int lastIndex = AllProducts.Products.Count - 1;
                if (selectedIndex != lastIndex && selectedIndex >= 0 && lastIndex >= 0)
                {
                    AllProducts.Products.Move(selectedIndex, lastIndex);
                }
            }else if (!checkBox.IsChecked)
            {
                
                AllProducts.Products.Move(selectedIndex, 0);
            }
        }


        private void DeleteButton_Clicked(object sender, EventArgs e)
        {
       
            if (BindingContext is Product product)
            {
                
                AllProducts.Products.Remove(product);

                FileHelper.SaveProducts(AllProducts.Products);
            }
        }
       

        private void onminus(object sender, EventArgs e)
        {
            if (BindingContext is Product product)
            {
                product.Quantity -= 1;
            }
            FileHelper.SaveProducts(AllProducts.Products);
        }

        private void onplus(object sender, EventArgs e)
        {
            if (BindingContext is Product product)
            {
                product.Quantity += 1;
            }
            FileHelper.SaveProducts(AllProducts.Products);
        }
    }
}
