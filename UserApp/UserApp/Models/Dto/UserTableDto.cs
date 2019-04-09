using System;

namespace UserApp.Models.Dto
{
    public class UserTableDto
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string AdditionalInfo { get; set; }
        public DateTime DateOfBirth { get; set; }
    }
}