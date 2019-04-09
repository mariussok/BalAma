using System;
using System.ComponentModel.DataAnnotations;

namespace UserApp.Models.Data
{
    public class UserDao
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public DateTime DateOfBirth { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string Email { get; set; }
        public string AdditionalInfo { get; set; }
    }
}