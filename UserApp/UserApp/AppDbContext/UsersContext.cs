using Microsoft.EntityFrameworkCore;
using UserApp.Models.Data;

namespace UserApp.AppDbContext
{
    public class UsersContext : DbContext
    {
        public DbSet<UserDao> Users { get; set; }

        public UsersContext(DbContextOptions<UsersContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<UserDao>()
                .HasIndex(u => u.Email)
                .IsUnique();
        }
    }
}