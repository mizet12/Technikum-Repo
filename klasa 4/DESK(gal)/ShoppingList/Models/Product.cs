using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShoppingList.Models
{
    class Product : INotifyPropertyChanged
    {
        public string name { get; set; }
        public string category { get; set; } 
        public int amount {
            get => _amount;
            set {  
            if(_amount != value)
                {
                    _amount = value;
                    OnPropertyChanged(nameof(amount));
                }
            }

            
        }
        private int _amount;

        public event PropertyChangedEventHandler PropertyChanged;
        protected virtual void OnPropertyChanged(string propertyName)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }
}
