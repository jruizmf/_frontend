using System;
using System.ComponentModel.DataAnnotations;

namespace CourseApi.Models
{
    public class Session
    {
        [Key]
        public int? id { get; set; }
        [Required(ErrorMessage="Field Obligatory")]
        public string token { get; set; }
        public DateTime date_added { get; set; }
        public DateTime expiration { get; set; }
        public int user_id { get; set;}

        public User User {get; set;}
    }
}
