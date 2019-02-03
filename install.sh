echo "-- Let's start our provision --"
sudo apt-add-repository ppa:ondrej/php
sudo add-apt-repository ppa:webupd8team/java
wget -q -O - https://pkg.jenkins.io/debian/jenkins-ci.org.key | sudo apt-key add -
echo deb https://pkg.jenkins.io/debian-stable binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list
sudo apt-get update
echo "-- Install PHP --"
sudo apt-get install -y php7.2 libapache2-mod-php7.2 php7.2-cli php7.2-common php7.2-mbstring php7.2-gd php7.2-intl php7.2-xml php7.2-mysql php7.2-zip
php -v
echo "-- Installing Composer --"
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '48e3236262b34d30969dca3c37281b3b4bbe3221bda826ac6a9a62d6444cdb0dcd0615698a5cbe587c3f0fe57a54d8f5') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
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
echo debconf shared/accepted-oracle-license-v1-1 select true | sudo debconf-set-selections
echo debconf shared/accepted-oracle-license-v1-1 seen true | sudo debconf-set-selections
sudo apt-get install oracle-java8-installer -y
echo "-- Installing Jenkins --"
sudo apt-get install jenkins -y
echo "-- Downloading Jenkins Cli and installing plugins --"
sleep 200
wget --tries=10 http://localhost:8080/jnlpJars/jenkins-cli.jar
var=$(sudo cat /var/lib/jenkins/secrets/initialAdminPassword)
java -jar jenkins-cli.jar -s http://localhost:8080 -auth admin:$var  install-plugin checkstyle cloverphp crap4j dry htmlpublisher jdepend plot pmd violations warnings xunit
java -jar jenkins-cli.jar -s http://localhost:8080 -auth admin:$var safe-restart
sleep 200
curl -L https://raw.githubusercontent.com/sebastianbergmann/php-jenkins-template/master/config.xml | \
     java -jar jenkins-cli.jar -s http://localhost:8080 -auth admin:$var create-job php-template
echo 'export PATH="$PATH:$HOME/.config/composer/vendor/bin"' >> ~/.profile 
sleep 200
echo "-- JENKINS PHP READY --"


	