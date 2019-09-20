
  Pod::Spec.new do |s|
    s.name = 'Concatenate'
    s.version = '0.0.1'
    s.summary = 'A test plugin that concatenates two input strings'
    s.license = 'MIT'
    s.homepage = 'https://github.com/Cloov/capacitor-plugin'
    s.author = 'Shaun Campbell'
    s.source = { :git => 'https://github.com/Cloov/capacitor-plugin', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end