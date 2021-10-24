using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OOP_WORKSHOP_PROJECT.Models
{
    /*
     * This class represents a report on abusive posts
     * */
    public class PostReport : Report
    {
        public int PostId {get;set;}
    }
}
