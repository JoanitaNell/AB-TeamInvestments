using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var connectionString = "Server=tcp:sql-teaminvestmentsserver.database.windows.net,1433;Initial Catalog=sqldb-TeamInvestments;Persist Security Info=False;User ID=bigboi;Password=Password25;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
builder.Services.AddDbContext<BigBoiDbContext>(x => x.UseSqlServer(connectionString));


// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.

    app.UseSwagger();
    app.UseSwaggerUI();


app.UseHttpsRedirection();


app.MapGet("/getCurrentInvestmentsTokenValues", async (BigBoiDbContext _dbContext) =>
{
})
.WithName("GetCurrentInvestmentsTokenValues");

app.MapGet("/investments", async () =>
{
    var client = new HttpClient();
    var response = await client.GetAsync("https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2020-10-13?adjusted=true&apiKey=Ac4_m0hts4xdgGfRhkGisL803PyGyWXY");
    var results= Newtonsoft.Json.JsonConvert.DeserializeObject<Results>(await response.Content.ReadAsStringAsync());
    var investments = new List<Invest>();
    for (int i = 0; i < 10; i++)
    {
        var inv = new Invest()
        {
            T= results.results[i].T,
            c= results.results[i].c,
        };
        investments.Add(inv);
    }
    return investments;
})
.WithName("Investments");

app.MapPost("/newInvestment", async (InvestmentDetails investment, BigBoiDbContext _dbContext) => 
{
})
.WithName("NewInvestment");

app.MapPut("/updateInvestmentTokenValue{investmentName}", async (string investmentName, BigBoiDbContext _dbContext) => 
{
})
.WithName("UpdateInvestmentTokenValue");

app.Run();




public class CurrentInvestments
{
    public string StockName { get; set; }
    public int TokenValue { get; set; }
}


public class InvestmentDetails
{

}


public class Invest
{
    public string T { get; set; }
    public float c { get; set; }
}

public class Results
{
    public List<Invest> results { get; set;}
}