using Microsoft.EntityFrameworkCore;

namespace RickAndMortyApi.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Episode> Episodes { get; set; }
        public DbSet<Character> Characters { get; set; }
    }
}
