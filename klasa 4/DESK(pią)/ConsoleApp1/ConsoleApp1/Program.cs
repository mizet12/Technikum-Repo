
namespace Kalkulator
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Kalkulator");
            Console.WriteLine(" Wybierz jaką czynność chcesz wykonać: [1]Dodawanie, [2]Odejmowanie, [3]Mnożenie, [4]Dzielenie");

            string operation = Console.ReadLine();

            if(operation == "1") 
            {
                Dodawanie(); 
            }else if(operation == "2")
            {
                Odejmowanie();
            }else if (operation == "3")
            {
                Mnozenie();
            }else if(operation == "4")
            {
                Dzielenie();
            }
            else
            {
                Console.WriteLine("Podałeś nie poprawną liczbę");
            }
        }


        static void Dodawanie()
        {

            Console.WriteLine("Podaj pierwszą liczbę");
            int a =int.Parse(Console.ReadLine());
            Console.WriteLine("Podaj drugą liczbę");
            int b = int.Parse(Console.ReadLine());
            Console.WriteLine("Wynik: " + (a + b));
        }
         
        static void Odejmowanie()
        {
            Console.WriteLine("Podaj pierwszą liczbę");
            int a = int.Parse(Console.ReadLine());
            Console.WriteLine(("Podaj drugą liczbę"));
            int b = int.Parse(Console.ReadLine());
            Console.WriteLine("Wynik: " + (a - b));
        }

        static void Mnozenie()
        {
            Console.WriteLine("Podaj pierwszą liczbę");
            int a = int.Parse(Console.ReadLine());
            Console.WriteLine(("Podaj drugą liczbę"));
            int b = int.Parse(Console.ReadLine());
            Console.WriteLine("Wynik: " + (a * b));
        }
        static void Dzielenie()
        {
            Console.WriteLine("Podaj pierwszą liczbę");
            int a = int.Parse(Console.ReadLine());
            Console.WriteLine(("Podaj drugą liczbę"));
            int b = int.Parse(Console.ReadLine());
            Console.WriteLine("Wynik: " + (a / b));
        }
    }
}

