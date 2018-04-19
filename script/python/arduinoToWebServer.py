import serial
import urllib.request
import urllib.parse
#Static variable
ser = serial.Serial(
    port='/dev/ttyACM0',\
    baudrate=9600)
#Allow write boolean
prt = False

#Data to send
toSend = '';

#Check connection to serial port
print('Connected to :'+ser.portstr)

#Sending function
def sendData(data):
    url = 'http://127.0.0.1:3000/ledState'
    paquet = {'data' : data}
    paquet = urllib.parse.urlencode(paquet)
    paquet = paquet.encode('utf-8')
    req = urllib.request.Request(url, paquet)
    resp = urllib.request.urlopen(req)
    respData = resp.read()
    #print(respData)
    
    return
while True:
    for char in ser.read():
        if(char == 0x7C):
            print('Debut message')
            prt = True
            
        if((char != 0x7C) and (char != 0X5F) and (prt == True) ):
            #print(chr(char))
            toSend += chr(char)
            
        if(char == 0x5F):
            print('Message recu : '+toSend)
            sendData(toSend)
            prt = False
            toSend = ''
                    
        
ser.close()
    