using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StundentMangement.ViewModels
{
    public class CusCatalog
    {
        public int id { set; get; }
        public int startYear { set; get; }
        public int endYear { set; get; }
        public string note { set; get; }
        public Nullable<int> status { set; get; }


    }
}