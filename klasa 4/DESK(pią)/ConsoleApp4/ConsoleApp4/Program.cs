using System;
using System.IO;
using System.Collections.Generic;

struct Album
{
    public string Artist { get; set; }
    public string AlbumTitle { get; set; }
    public int NumberOfSongs { get; set; }
    public int Year { get; set; }
    public long Downloads { get; set; }
    public Album(string artist, string albumTitle, int numberOfSongs, int year, long download)
    {
        Artist = artist;
        AlbumTitle = albumTitle;
        NumberOfSongs = numberOfSongs;
        Year = year;
        Downloads = download;
    }
}

class Program
{
    public static void Main(string[] args)
    {
        string filePath = "Data.txt";
        List<Album> list = ReadLinesFromFile(filePath);
        Display(list);
    }

    public static List<Album> ReadLinesFromFile(string filePath)
    {
        var albums = new List<Album>();
        var lines = File.ReadAllLines(filePath);

        for(int i = 0; i < lines.Length; i += 6)
        {
            if (string.IsNullOrEmpty(lines[i])) continue;

            var album = new Album(
                lines[i].Trim(),
                lines[i + 1].Trim(),
                int.Parse(lines[i + 2].Trim()),
                int.Parse(lines[i + 3].Trim()),
                long.Parse(lines[i + 4].Trim())
                );
            albums.Add(album);
        }

        return albums;
    }
    public static void Display(List<Album> albums)
    {
        foreach(Album album in albums)
        {
            Console.WriteLine($"{album.Artist}\n{album.AlbumTitle}\n{album.NumberOfSongs}\n{album.Year}\n{album.Downloads}\n");
        }
    }
}