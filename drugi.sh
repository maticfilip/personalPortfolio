expr 5 + 4
expr "5 + 4"
expr 5+4


#!/bin/bash
echo $(( $1 * 10 ))


read -p "Unesite broj: " broj
echo $(( broj % 5 ))
