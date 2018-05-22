'''
Copyright (c) 2018 bluelief.
Licensed under the MIT License.
'''

from bottle import route, run, template
import sys, urllib.request, urllib.error


@route("/<domain_name>")
def http_header(domain_name):
    """ http header check """
    host = "http://" + domain_name

    try:
        fd = urllib.request.urlopen(host)
    except urllib.error.URLError as e:
        return "[*] Accsess Error, %s" % e
    
    result = '''
Request: %s\n
--------- Header ----------\n
''' % fd.geturl()

    for key, value in fd.info().items():
        result += "%s = %s\n\n" % (key, value)
    
    return result


run(host='localhost', port=8080, debug=True, reloader=True)