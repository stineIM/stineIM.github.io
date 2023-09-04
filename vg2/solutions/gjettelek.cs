/***** GJETTELEK *******/ 

Random rand = new Random();
int rnd = rand.Next(1, 100);
int count = 0;
bool finished = false; 

Console.WriteLine("Hei. No skal me leke ein gjettelek. Gjett eit heiltal mellom 1 og 100:");

while (!finished)
{
    int number = Convert.ToInt32(Console.ReadLine());
    count++; 

    if (number == rnd)
    {
        Console.WriteLine("Du har gjettet riktig tall! Du klarte det på " + count + " forsøk.");
        finished = true;    
    }
    else if (number < rnd)
    {
        Console.WriteLine("Tallet er høgare");
        Console.WriteLine("Prøv på nytt!");
    }
    else if (number > rnd)
    {
        Console.WriteLine("Tallet er lavare");
        Console.WriteLine("Prøv på nytt!");
    }
}
