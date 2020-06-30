using Microsoft.EntityFrameworkCore.Migrations;

namespace DatingApp.API.Migrations
{
    public partial class FixingUserClass : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Coutry",
                table: "Users");

            migrationBuilder.AddColumn<string>(
                name: "Country",
                table: "Users",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Country",
                table: "Users");

            migrationBuilder.AddColumn<string>(
                name: "Coutry",
                table: "Users",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
