﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace BigBoiBackend.Migrations
{
    [DbContext(typeof(BigBoiDbContext))]
    [Migration("20220125110103_initial")]
    partial class initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("Invest", b =>
                {
                    b.Property<string>("T")
                        .HasColumnType("nvarchar(450)");

                    b.Property<float>("c")
                        .HasColumnType("real");

                    b.HasKey("T");

                    b.ToTable("CurrentInvestments");
                });
#pragma warning restore 612, 618
        }
    }
}
