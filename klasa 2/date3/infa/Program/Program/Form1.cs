using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Program
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
           //Application.Exit();
        }
        private void button5_Click(object sender, EventArgs e)
        {
            int rndLiczba = 0;
            Random x = new Random((int)DateTime.Now.Ticks);
            rndLiczba = x.Next(1, 130);
            textBox1.Text = rndLiczba.ToString();
        }


        private void button1_Click(object sender, EventArgs e)
        {
            int x;
            x = int.Parse(textBox1.Text);
            string znak = Char.ConvertFromUtf32(x);
            textBox2.Text = znak.ToString();

            listBox1.Items.Add("Podana liczba: " + x + "Jako znak: " + znak.ToString());
            this.progressBar1.Increment(1);

            if(progressBar1.Value == progressBar1.Maximum)
            {
                MessageBox.Show("Koniec");
            }
        }

        private void koniecToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            int hex = 0;
            hex = int.Parse(textBox1.Text);
            string HEX = Convert.ToString(hex, 16);
            textBox2.Text = HEX.ToString();
            listBox1.Items.Add("Podana liczba: " + hex + " Jako hex: " + HEX.ToString());
            this.progressBar1.Increment(1);
            if (progressBar1.Value == progressBar1.Maximum)
            {
                MessageBox.Show("Koniec");
            }
        }

        private void button3_Click(object sender, EventArgs e)
        {
            int bin = 0;
            bin = int.Parse(textBox1.Text);
            string dwoj = Convert.ToString(bin, 2);
            textBox2.Text = dwoj.ToString();
            listBox1.Items.Add("Podana liczba: " + bin + " Jako binarny: " + dwoj.ToString());
            this.progressBar1.Increment(1);
            if (progressBar1.Value == progressBar1.Maximum)
            {
                MessageBox.Show("Koniec");
            }

        }

        private void button4_Click(object sender, EventArgs e)
        {
            textBox1.Text = textBox2.Text = "0";
            listBox1.Items.Clear();
            this.progressBar1.Increment(-3);
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }
    }
}
