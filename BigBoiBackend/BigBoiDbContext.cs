using Microsoft.EntityFrameworkCore;
using System;

public class BigBoiDbContext: DbContext
{
	
	public BigBoiDbContext(DbContextOptions<BigBoiDbContext> options): base(options)
	{

	}

	public DbSet<User> Users { get; set; }
	public DbSet<CurrentInvestments> CurrentInvestments { get; set;}

	protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
		var connectionString = "Server=tcp:sql-teaminvestmentsserver.database.windows.net,1433;Initial Catalog=sqldb-TeamInvestments;Persist Security Info=False;User ID=bigboi;Password=Password25;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
		optionsBuilder.UseSqlServer(connectionString);

	} 
   
	
}
