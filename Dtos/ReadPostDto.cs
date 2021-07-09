﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OOP_WORKSHOP_PROJECT.Dtos
{
    public class ReadPostDto
    {
        public int Id { get; set; }

        public int UserId { get; set; }

        public string ImagePath { get; set; }

        public string Description { get; set; }

        public IEnumerable<int> likes { get; set; }
    }
}
