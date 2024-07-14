# -----------------------------------------------1. Importing Libraries------------------------------------------------
import requests as request
from bs4 import BeautifulSoup

# -----------------------------------------------2.Requesting and Getting response from database-----------------------
page=request.get("https://scraprate.in/")
soup=BeautifulSoup(page.text,"html.parser")
TableFigure = soup.find('figure')

with open("scraped_content.html", "w") as file:
    file.write("<html><head><title>Scraped Content</title></head><body>")
    if TableFigure:
        file.write(str(TableFigure))
    else:
        file.write("<p>No content found.</p>")
    file.write("</body></html>")