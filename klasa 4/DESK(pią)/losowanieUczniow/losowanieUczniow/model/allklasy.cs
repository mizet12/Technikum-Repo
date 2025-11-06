using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace losowanieUczniow.model
{
    internal class allklasy
    {
        public ObservableCollection<klasy> klasy {  get; set; } = new ObservableCollection<klasy>();

        string nazwaklasy { get; set; }

        public allklasy() => LoadClass();
        public void LoadClass()
        {
            klasy.Clear();
            IEnumerable<klasy> Wklasy = Directory.EnumerateFiles(FileSystem.AppDataDirectory, $"klasy.txt").Select(nazwaKlasy => new klasy() { klasa = File.ReadLines(nazwaKlasy).First() });
            foreach(klasy klasies in Wklasy)
            {
                klasy.Add(klasies);
            }
        }
    }
}
