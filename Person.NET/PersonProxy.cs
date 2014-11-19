using System;
using System.Threading.Tasks;
using NodaTime;

namespace People.NET
{
	public sealed class PersonProxy
	{
		public Task<object> GetAsync(dynamic input)
		{
			var birthDate = (DateTime)input.birthDate;
			var name = (string)input.name;

			return Task.FromResult<object>(
				new Person(
					new LocalDate(birthDate.Year, birthDate.Month, birthDate.Day), name));
		}
	}
}
