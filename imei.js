    function inspector()
    {
		var total = document.getElementById("imei").value.length;
		if (total == 15)
		{
		var x = document.getElementById("imei").value;
		
		var i1 = Math.floor(x/100000000000000);
		var i2 = Math.floor(x/10000000000000) - i1*10;
		var i3 = Math.floor(x/1000000000000) - i2*10 -i1*100;
		var i4 = Math.floor(x/100000000000) - i3*10 - i2*100 -i1*1000;
		var i5 = Math.floor(x/10000000000) - i4*10 - i3*100 - i2*1000 -i1*10000;
		var i6 = Math.floor(x/1000000000) - i5*10 - i4*100 - i3*1000 - i2*10000 -i1*100000;
		var i7 = Math.floor(x/100000000) - i6*10 - i5*100 - i4*1000 - i3*10000 - i2*100000 -i1*1000000;
		var i8 = Math.floor(x/10000000) - i7*10 - i6*100 - i5*1000 - i4*10000 - i3*100000 - i2*1000000 -i1*10000000;
		var i9 = Math.floor(x/1000000) - i8*10 - i7*100 - i6*1000 - i5*10000 - i4*100000 - i3*1000000 - i2*10000000 -i1*100000000;
		var i10 = Math.floor(x/100000) - i9*10 - i8*100 - i7*1000 - i6*10000 - i5*100000 - i4*1000000 - i3*10000000 - i2*100000000 -i1*1000000000;
		var i11 = Math.floor(x/10000) - i10*10 - i9*100 - i8*1000 - i7*10000 - i6*100000 - i5*1000000 - i4*10000000 - i3*100000000 - i2*1000000000 -i1*10000000000;
		var i12 = Math.floor(x/1000) - i11*10 - i10*100 - i9*1000 - i8*10000 - i7*100000 - i6*1000000 - i5*10000000 - i4*100000000 - i3*1000000000 - i2*10000000000 -i1*100000000000;
		var i13 = Math.floor(x/100) - i12*10 - i11*100 - i10*1000 - i9*10000 - i8*100000 - i7*1000000 - i6*10000000 - i5*100000000 - i4*1000000000 - i3*10000000000 - i2*100000000000 -i1*1000000000000;
		var i14 = Math.floor(x/10) - i13*10 - i12*100 - i11*1000 - i10*10000 - i9*100000 - i8*1000000 - i7*10000000 - i6*100000000 - i5*1000000000 - i4*10000000000 - i3*100000000000 - i2*1000000000000 -i1*10000000000000;
		var i15 = x - i14*10 - i13*100 - i12*1000 - i11*10000 - i10*100000 - i9*1000000 - i8*10000000 - i7*100000000 - i6*1000000000 - i5*10000000000 - i4*100000000000 - i3*1000000000000 - i2*10000000000000 -i1*100000000000000;

		var a1 = i2*2;
		var a2 = i4*2;
		var a3 = i6*2;
		var a4 = i8*2;
		var a5 = i10*2;
		var a6 = i12*2;
		var a7 = i14*2;
		
		var b1 = Math.floor(a1/10);
		var b2 = a1 - b1*10;
		var b3 = Math.floor(a2/10);
		var b4 = a2 - b3*10;
		var b5 = Math.floor(a3/10);
		var b6 = a3 - b5*10;
		var b7 = Math.floor(a4/10);
		var b8 = a4 - b7*10;
		var b9 = Math.floor(a5/10);
		var b10 = a5 - b9*10;
		var b11 = Math.floor(a6/10);
		var b12 = a6 - b11*10;
		var b13 = Math.floor(a7/10);
		var b14 = a7 - b13*10;
		
		
		
		var c1 = i1 + i3 + i5 + i7 + i9 + i11 + i13 + b1 + b2 + b3 + b4+ b5 + b6 + b7 + b8 + b9 + b10 + b11 + b12 + b13 + b14;
		var c2 = ( Math.floor(c1/10) + 1 )*10
		if ( c2 - c1 == i15 )
		{
		alert("正確的IMEI碼");
		}
		else
		{
		alert("錯誤的IMEI碼");
		}
		}
		else
		{
		alert("IMEI有15碼呦~");
		}
	}
