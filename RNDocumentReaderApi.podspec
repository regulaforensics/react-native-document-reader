require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name         = "RNDocumentReaderApi"
  s.version      = package['version']
  s.summary      = package['description']
  s.license      = package['license']

  s.authors      = { 'RegulaForensics' => 'support@regulaforensics.com' }
  s.homepage     = 'https://regulaforensics.com'

  s.source       = { :http => 'file:' + __dir__ }
  s.ios.deployment_target = '12.0'
  s.source_files  = "ios/*.{h,m}"
  s.dependency 'DocumentReader', '7.5.4221'
  s.dependency 'React'
end
