using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Counter4F.Models
{
    internal class AllCounters
    {
        public ObservableCollection<Counter> Counters { get; set; } = new ObservableCollection<Counter>();

    }
}
