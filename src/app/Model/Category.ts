using System.ComponentModel.DataAnnotations;

namespace CourseApi.Models{
    public class Category
    {
        [Key]
        public int id { get; set; }
        [Required(ErrorMessage="Field Obligatory")]
        [MaxLength(30, ErrorMessage="This field must contain less than 30 characters")]
        [MinLength(1, ErrorMessage="This field must contain more than 1 character")]
        public string title { get; set; }
        
        [Required(ErrorMessage="Field Obligatory")]
        [MaxLength(30, ErrorMessage="This field must contain less than 30 characters")]
        [MinLength(1, ErrorMessage="This field must contain more than 1 character")]
        public string name { get; set; }
    }
}