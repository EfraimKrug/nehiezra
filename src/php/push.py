from ftplib import FTP

ftp = FTP('ftp.namethatthing.site')
ftp.login('EfraimFTP','G00dSh@bb0s')
ftp.cwd('public_html')
ftp.cwd('cgi-bin')
ftp.cwd('npolen')
php = ["NPStoreBookAPI.php", "NPBooks.php", "NPStorePerushAPI.php", "NPPerushNotes.php", "CleanUp.php"];
for f in php:
  print f
  ftp.storbinary('STOR ' + f, open(f, 'rb'))
