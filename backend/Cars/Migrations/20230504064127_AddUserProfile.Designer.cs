﻿// <auto-generated />
using System;
using Cars.DbContexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Cars.Migrations
{
    [DbContext(typeof(CarContext))]
    [Migration("20230504064127_AddUserProfile")]
    partial class AddUserProfile
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("CarRace", b =>
                {
                    b.Property<int>("CarsId")
                        .HasColumnType("integer");

                    b.Property<int>("RacesId")
                        .HasColumnType("integer");

                    b.HasKey("CarsId", "RacesId");

                    b.HasIndex("RacesId");

                    b.ToTable("CarRace");
                });

            modelBuilder.Entity("Cars.Entities.Author", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Phone")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Authors");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Email = "johndoe@gmail.com",
                            FirstName = "John",
                            LastName = "Doe",
                            Phone = "0712356723"
                        },
                        new
                        {
                            Id = 2,
                            Email = "frankhuber@gmail.com",
                            FirstName = "Frank",
                            LastName = "Huber",
                            Phone = "0720152323"
                        },
                        new
                        {
                            Id = 3,
                            Email = "simonjones@gmail.com",
                            FirstName = "Simon",
                            LastName = "Jones",
                            Phone = "0720144723"
                        },
                        new
                        {
                            Id = 4,
                            Email = "steveburnley@gmail.com",
                            FirstName = "Steve",
                            LastName = "Burnley",
                            Phone = "0745156723"
                        },
                        new
                        {
                            Id = 5,
                            Email = "andreisava@email.com",
                            FirstName = "Andrei",
                            LastName = "Sava",
                            Phone = "0712356723"
                        },
                        new
                        {
                            Id = 6,
                            Email = "simbotinpopescu@email.com",
                            FirstName = "Simbotin",
                            LastName = "Popescu",
                            Phone = "0720152323"
                        },
                        new
                        {
                            Id = 7,
                            Email = "lucianjones@email.com",
                            FirstName = "Lucian",
                            LastName = "Jones",
                            Phone = "0720144723"
                        },
                        new
                        {
                            Id = 8,
                            Email = "jamessoftle@email.com",
                            FirstName = "James",
                            LastName = "Softle",
                            Phone = "0745156723"
                        },
                        new
                        {
                            Id = 9,
                            Email = "sorindica@email.com",
                            FirstName = "Sorin",
                            LastName = "Dica",
                            Phone = "0745156723"
                        },
                        new
                        {
                            Id = 10,
                            Email = "tudorpopescu@email.com",
                            FirstName = "Tudor",
                            LastName = "Popescu",
                            Phone = "0745156723"
                        });
                });

            modelBuilder.Entity("Cars.Entities.Car", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("Color")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("FabricationYear")
                        .HasColumnType("integer");

                    b.Property<string>("Manufacturer")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Model")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Cars");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Color = "Blue",
                            FabricationYear = 2020,
                            Manufacturer = "BMW",
                            Model = "M4"
                        },
                        new
                        {
                            Id = 2,
                            Color = "Grey",
                            FabricationYear = 2018,
                            Manufacturer = "Audi",
                            Model = "RS6"
                        },
                        new
                        {
                            Id = 3,
                            Color = "Black",
                            FabricationYear = 2021,
                            Manufacturer = "Volkswagen",
                            Model = "Golf GTI"
                        },
                        new
                        {
                            Id = 4,
                            Color = "Red",
                            FabricationYear = 2016,
                            Manufacturer = "Mercedes-Benz",
                            Model = "AMG"
                        },
                        new
                        {
                            Id = 5,
                            Color = "White",
                            FabricationYear = 2022,
                            Manufacturer = "BMW",
                            Model = "Series 5"
                        },
                        new
                        {
                            Id = 6,
                            Color = "Blue",
                            FabricationYear = 2018,
                            Manufacturer = "Ford",
                            Model = "Mustang"
                        },
                        new
                        {
                            Id = 7,
                            Color = "Red",
                            FabricationYear = 2020,
                            Manufacturer = "Mazda",
                            Model = "CX5"
                        },
                        new
                        {
                            Id = 8,
                            Color = "Grey",
                            FabricationYear = 2013,
                            Manufacturer = "Volvo",
                            Model = "V40"
                        },
                        new
                        {
                            Id = 9,
                            Color = "Black",
                            FabricationYear = 1998,
                            Manufacturer = "Volkswagen",
                            Model = "Golf 3 Cabrio"
                        },
                        new
                        {
                            Id = 10,
                            Color = "Green",
                            FabricationYear = 2019,
                            Manufacturer = "Volkswagen",
                            Model = "ID3"
                        });
                });

            modelBuilder.Entity("Cars.Entities.Race", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Country")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Races");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            City = "Indiana",
                            Country = "USA",
                            Name = "Indianapolis 500"
                        },
                        new
                        {
                            Id = 2,
                            City = "Le Mans",
                            Country = "France",
                            Name = "24 Hours of Le Mans"
                        },
                        new
                        {
                            Id = 3,
                            City = "Daytona",
                            Country = "USA",
                            Name = "Daytona 500"
                        },
                        new
                        {
                            Id = 4,
                            City = "Dakar",
                            Country = "Saudi Arabia",
                            Name = "Dakar Rally"
                        },
                        new
                        {
                            Id = 5,
                            City = "Monaco",
                            Country = "Monaco",
                            Name = "Monaco Grand Prix"
                        },
                        new
                        {
                            Id = 6,
                            City = "Colorado",
                            Country = "USA",
                            Name = "Pikes Peak Hill Climb"
                        },
                        new
                        {
                            Id = 7,
                            City = "Bathurst",
                            Country = "Australia",
                            Name = "Bathurst 1000"
                        },
                        new
                        {
                            Id = 8,
                            City = "Finnish Lakeland",
                            Country = "Finland",
                            Name = "Rally Finland"
                        },
                        new
                        {
                            Id = 9,
                            City = "Monte Carlo",
                            Country = "France",
                            Name = "Monte Carlo Rally"
                        },
                        new
                        {
                            Id = 10,
                            City = "Budapest",
                            Country = "Hungary",
                            Name = "Hungarian GP"
                        });
                });

            modelBuilder.Entity("Cars.Entities.Review", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<int>("AuthorId")
                        .HasColumnType("integer");

                    b.Property<int>("CarId")
                        .HasColumnType("integer");

                    b.Property<DateTime>("Date")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<int>("Score")
                        .HasColumnType("integer");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("AuthorId");

                    b.HasIndex("CarId");

                    b.ToTable("Reviews");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            AuthorId = 10,
                            CarId = 1,
                            Date = new DateTime(2023, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "is a reliable and efficient car with a comfortable interior, making it perfect for commuting or road trips.",
                            Score = 10,
                            Title = "Very good car!"
                        },
                        new
                        {
                            Id = 2,
                            AuthorId = 9,
                            CarId = 2,
                            Date = new DateTime(2020, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "The Honda Civic is a reliable and affordable sedan that's perfect for city driving, but it lacks the power and excitement of its sportier competitors.",
                            Score = 4,
                            Title = "Must drive at least once in a lifetime!"
                        },
                        new
                        {
                            Id = 3,
                            AuthorId = 8,
                            CarId = 3,
                            Date = new DateTime(2019, 11, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "s a classic American muscle car that delivers an impressive blend of power and handling, but its fuel economy leaves something to be desired.",
                            Score = 4,
                            Title = "Could be better!"
                        },
                        new
                        {
                            Id = 4,
                            AuthorId = 7,
                            CarId = 4,
                            Date = new DateTime(2023, 12, 10, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "luxury sedan that offers an incredible driving experience with lightning-fast acceleration and cutting-edge technology.",
                            Score = 4,
                            Title = "Decent!"
                        },
                        new
                        {
                            Id = 5,
                            AuthorId = 6,
                            CarId = 5,
                            Date = new DateTime(2023, 3, 4, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "comfortable and practical midsize sedan that's great for families, but it can be a bit bland to drive.",
                            Score = 4,
                            Title = "This is a good car!"
                        },
                        new
                        {
                            Id = 6,
                            AuthorId = 1,
                            CarId = 6,
                            Date = new DateTime(2022, 5, 11, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "is a legendary sports car that continues to impress with its exhilarating performance and stunning design.",
                            Score = 6,
                            Title = "Not that great, could be better!"
                        },
                        new
                        {
                            Id = 7,
                            AuthorId = 2,
                            CarId = 7,
                            Date = new DateTime(2021, 11, 21, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "The Chevrolet Corvette Stingray is a powerful and agile sports car that's sure to turn heads, but its interior quality can be underwhelming.",
                            Score = 5,
                            Title = "Best SUV I drove so far !"
                        },
                        new
                        {
                            Id = 8,
                            AuthorId = 3,
                            CarId = 8,
                            Date = new DateTime(2019, 10, 4, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "well-rounded luxury sedan that offers a comfortable ride, upscale features, and impressive fuel efficiency.",
                            Score = 4,
                            Title = "Shame on the manufacturer!"
                        },
                        new
                        {
                            Id = 9,
                            AuthorId = 4,
                            CarId = 9,
                            Date = new DateTime(2020, 9, 23, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "a rugged and capable off-road vehicle that's perfect for adventurous drivers, but its on-road comfort and practicality can be lacking.",
                            Score = 5,
                            Title = "Best car ever"
                        },
                        new
                        {
                            Id = 10,
                            AuthorId = 5,
                            CarId = 10,
                            Date = new DateTime(2021, 8, 4, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Description = "a versatile crossover that's perfect for outdoor enthusiasts, thanks to its all-wheel drive and generous cargo space.",
                            Score = 4,
                            Title = "Well Done Volkswagen"
                        });
                });

            modelBuilder.Entity("Cars.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer");

                    NpgsqlPropertyBuilderExtensions.UseIdentityByDefaultColumn(b.Property<int>("Id"));

                    b.Property<byte[]>("PasswordHash")
                        .IsRequired()
                        .HasColumnType("bytea");

                    b.Property<byte[]>("PasswordSalt")
                        .IsRequired()
                        .HasColumnType("bytea");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("CarRace", b =>
                {
                    b.HasOne("Cars.Entities.Car", null)
                        .WithMany()
                        .HasForeignKey("CarsId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Cars.Entities.Race", null)
                        .WithMany()
                        .HasForeignKey("RacesId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("Cars.Entities.Review", b =>
                {
                    b.HasOne("Cars.Entities.Author", "Author")
                        .WithMany("Reviews")
                        .HasForeignKey("AuthorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Cars.Entities.Car", "Car")
                        .WithMany("Reviews")
                        .HasForeignKey("CarId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Author");

                    b.Navigation("Car");
                });

            modelBuilder.Entity("Cars.Entities.Author", b =>
                {
                    b.Navigation("Reviews");
                });

            modelBuilder.Entity("Cars.Entities.Car", b =>
                {
                    b.Navigation("Reviews");
                });
#pragma warning restore 612, 618
        }
    }
}
