using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Error
{
    public class ApiResponse
    {
        public ApiResponse(int statusCode, string message = null)
        {
            this.statusCode = statusCode;
            this.message = message ?? GetDefaultMessageForStatusCode(statusCode);
        }

        public int statusCode { get; set; }
        public string message { get; set; }

        private string GetDefaultMessageForStatusCode(int statusCode)
        {
            return statusCode switch
            {
                400 => "A bad requesst, you have made",
                401 => "Authorize, you are not",
                404 => "Resource found, it was not",
                500 => "Server Error",
                _ => ""

            };
        }
    }
    
}