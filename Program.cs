using Newtonsoft.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);


//app.MapGet("/", () => "Hello World!");

builder.Services.AddMvc().AddNewtonsoftJson(options => options.SerializerSettings.ContractResolver = new DefaultContractResolver());

// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.AddRazorPages();

builder.Services.AddRazorPages().AddRazorRuntimeCompilation();

var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}
app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.MapRazorPages();
app.MapControllers();
app.Run();

