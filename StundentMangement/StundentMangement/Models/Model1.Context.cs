﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace StundentMangement.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class StudentManagementEntities : DbContext
    {
        public StudentManagementEntities()
            : base("name=StudentManagementEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<BRANCH> BRANCHes { get; set; }
        public virtual DbSet<CATALOG> CATALOGs { get; set; }
        public virtual DbSet<CATELOGY> CATELOGies { get; set; }
        public virtual DbSet<CONTACT> CONTACTs { get; set; }
        public virtual DbSet<DOCUMENT> DOCUMENTs { get; set; }
        public virtual DbSet<INPUT_TYPE> INPUT_TYPE { get; set; }
        public virtual DbSet<INTAKE> INTAKEs { get; set; }
        public virtual DbSet<PROGRAM> PROGRAMS { get; set; }
        public virtual DbSet<SEMESTER> SEMESTERs { get; set; }
        public virtual DbSet<STUDENT> STUDENTs { get; set; }
        public virtual DbSet<sysdiagram> sysdiagrams { get; set; }
        public virtual DbSet<TYPE_STUDENT> TYPE_STUDENT { get; set; }
        public virtual DbSet<YEAR> YEARs { get; set; }
    }
}