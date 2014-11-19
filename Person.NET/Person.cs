using NodaTime;

namespace People.NET
{
    public sealed class Person
    {
		 public Person(LocalDate birthDate, string name)
		 {
			 this.BirthDate = birthDate;
			 this.Name = name;
		 }

		 public override string ToString()
		 {
			 return this.Name + " " + this.BirthDate;
		 }

		 public LocalDate BirthDate { get; private set; }
		 public string Name { get; private set; }
	 }
}
