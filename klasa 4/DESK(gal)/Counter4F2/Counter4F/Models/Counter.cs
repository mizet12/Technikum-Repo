using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Counter4F.Models
{
    internal class Counter : INotifyPropertyChanged
    {
        private int _variable;

        public int variable
        {
            get => _variable;
            set
            {
                if (_variable != value)
                {
                    _variable = value;
                    OnPropertyChanged(nameof(variable));
                }
            }
        }
        public string name { get; set; }

        public event PropertyChangedEventHandler PropertyChanged;
        protected virtual void OnPropertyChanged(string propertyName)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }
}
