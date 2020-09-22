require "date"
require "time"
require "httparty"
require "json"

desc "运行"
task :run do
  system "bundle exec jekyll serve --incremental --port 10224"
end

desc "部署"
task :deploy do
  dir = "../.tmp/persona"

  unless FileTest.directory?("../.tmp")
    system "mkdir ../.tmp"
  end

  unless FileTest.directory?(dir)
    system "mkdir #{dir}"

    cd dir do
      system "git init"
      system "git remote add origin https://github.com/ourairyu/persona.git"
      system "git fetch"
      system "git checkout gh-pages"
    end
  else
    cd dir do
      # system "git reset --hard HEAD"
      system "git pull origin gh-pages"
    end
  end

  system "bundle exec jekyll clean"
  system "JEKYLL_ENV=production bundle exec jekyll build -d #{dir}"
  
  cd dir do
    current_time = Time.now.strftime("%Y-%m-%d %H:%M:%S")

    system "touch .nojekyll"
    system "touch CNAME"
    system "echo persona.ourai.ws > CNAME"
    system "git add -A"
    system "git commit -m 'build: generate on #{current_time}'"
    system "git push origin gh-pages"
  end
end
