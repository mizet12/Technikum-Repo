using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lista.Models
{
    public class AllProducts
    {
        private static ObservableCollection<Product> _products = new ObservableCollection<Product>();

        public static ObservableCollection<Product> Products
        {
            get => _products;
            set => _products = value;
        }
    }

}
