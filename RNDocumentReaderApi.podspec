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
  s.ios.deployment_target = '13.0'
  s.source_files  = "ios/*.{h,m}"
  s.dependency 'DocumentReader', '8.1.4772'
  s.dependency 'React'
end
