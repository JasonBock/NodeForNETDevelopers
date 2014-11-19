using System;
using NodaTime;
using People.NET;

namespace People.ConsoleApplication.NET
{
	class Program
	{
		static void Main(string[] args)
		{
			Console.Out.WriteLine("Person in .NET Console");
			var person = new Person(new LocalDate(1970, 1, 1), "Jane Smith");
			Console.Out.WriteLine(person.ToString());
			Console.In.ReadLine();
		}
	}
}
