using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BigBoiBackend.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CurrentInvestments",
                columns: table => new
                {
                    T = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    c = table.Column<float>(type: "real", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CurrentInvestments", x => x.T);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CurrentInvestments");
        }
    }
}
