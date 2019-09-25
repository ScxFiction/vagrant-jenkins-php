echo "-- Let's start our provision --"
wget -q -O - https://pkg.jenkins.io/debian/jenkins-ci.org.key | sudo apt-key add -
echo deb https://pkg.jenkins.io/debian-stable binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list
sudo apt-get update
echo "-- Install PHP --"
sudo apt-get install -y php php-cli libapache2-mod-php php-cli php-common php-mbstring php-gd php-intl php-xml php-mysql php-zip php-curl php-xdebug php-soap
sudo apt-get install -y git
sudo apt-get install -y nodejs
php -v
echo "-- Installing Composer --"
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === 'a5c698ffe4b8e849a443b120cd5ba38043260d5c4023dbf93e1558871f1f07f58274fc6f4c93bcfd858c6bd0775cd8d1') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
sudo mv composer.phar /usr/bin/composer
echo "-- Increasing Swap Memory --"
sudo /bin/dd if=/dev/zero of=/var/swap.1 bs=1M count=1024
sudo /sbin/mkswap /var/swap.1
sudo /sbin/swapon /var/swap.1
export PATH="$PATH:$HOME/.config/composer/vendor/bin"
echo "-- Installing Codesniffer -- "
composer global require "squizlabs/php_codesniffer=*"
echo "-- Installing PHPUnit --"
composer global require phpunit/phpunit ^7
echo "-- Installing PHPCPD --"
composer global require sebastian/phpcpd
echo "-- Installing PHPDOX --"
wget http://phpdox.de/releases/phpdox.phar
chmod +x phpdox.phar
sudo mv phpdox.phar /usr/local/bin/phpdox
echo "-- Installing PDepend -- "
composer global require pdepend/pdepend
echo "-- Installing PHPLOC --"
composer global require phploc/phploc
echo "-- Installing PHPMD --"
composer global require phpmd/phpmd
echo "-- Installing JAVA --"
#echo debconf shared/accepted-oracle-license-v1-1 select true | sudo debconf-set-selections
#echo debconf shared/accepted-oracle-license-v1-1 seen true | sudo debconf-set-selections
#sudo apt-get install oracle-java8-installer -y
sudo add-apt-repository ppa:openjdk-r/ppa
sudo apt-get update
sudo apt-get install openjdk-8-jre -y
echo "-- Installing Jenkins --"
sudo apt-get install jenkins -y
echo "-- Downloading Jenkins Cli and installing plugins --"
sleep 200
wget --tries=10 http://localhost:8080/jnlpJars/jenkins-cli.jar
var=$(sudo cat /var/lib/jenkins/secrets/initialAdminPassword)
java -jar jenkins-cli.jar -s http://localhost:8080 -auth admin:$var  install-plugin checkstyle cloverphp crap4j dry htmlpublisher jdepend plot pmd violations warnings xunit
java -jar jenkins-cli.jar -s http://localhost:8080 -auth admin:$var safe-restart
sleep 200
curl cp /vagrant/config.xml /home/vagrant/config.xml \
     java -jar jenkins-cli.jar -s http://localhost:8080 -auth admin:$var create-job php-template
echo 'export PATH="$PATH:$HOME/.config/composer/vendor/bin"' >> ~/.profile
sleep 200
echo "-- JENKINS PHP READY --"


