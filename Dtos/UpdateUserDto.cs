﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace OOP_WORKSHOP_PROJECT.Dtos
{
    public class UpdateUserDto
    {

        public string Name { get; set; }
        public string Email { get; set; }
        public string OldPassword { get; set; }
        public string Password { get; set; }
        public string ImagePath { get; set; }
    }
}
