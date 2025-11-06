using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sortowanie_babelkowe
{
    private static int wylosuj_liczbe()
    {
        int liczba = 0;
        Random x = new Random((int)DateTime.Now.Ticks);
        liczba = x.Next(1, 100);
        return liczba;
    }
    static void Main(string[] args)
    {
        int n, liczba;
        Console.Write("Spośród ilu liczb wybieramy? ");
        n = Convert.ToInt32(Console.ReadLine());
        int[] tab = new int[n];
        Console.WriteLine("Tablica niesortowana: ");
        for(int i = 0; i < n; i++)
        {
            liczba = wylosuj_liczbe();
            while (tab.Contains(liczba))
            {
                liczba = wylosuj_liczbe();
            }
            tab[i] = liczba;
            Console.Write("{0}, ", tab[i]);
        }
        for(int i =0; i < n; i++)
        {
            for (int j = 1; j < n - i; j++)
                if(tab[j - 1] > tab[j])
                {
                    int temp = tab[j - 1];
                    tab[j - 1] = tab[j];
                    tab[j] = temp;
                }
            Console.WriteLine();
            Console.WriteLine("Tablica sortowania: ");
            for(i = 0; i < n; i++)
            {
                Console.WriteLine("{0}, ", tab[i]);
            }
            Console.ReadLine();
        }
    }
}